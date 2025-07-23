import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase";

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tempRecipe, setTempRecipe] = useState(null);

  useEffect(() => {
    const getInitialSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
      setLoading(false);
    };

    getInitialSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user || null);
      setLoading(false);

      if (event === "SIGNED_IN" && session?.user && tempRecipe) {
        try {
          await saveRecipe(
            tempRecipe.title,
            tempRecipe.recipeContent,
            tempRecipe.ingredients
          );
          setTempRecipe(null);
          alert("Your recipe has been saved!");
        } catch (error) {
          console.error("Error saving temp recipe:", error);
        }
      }
    });

    return () => subscription?.unsubscribe();
  }, [tempRecipe]);

  const signUp = async (email, password, userData = {}) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData,
      },
    });
    return { data, error };
  };

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    setTempRecipe(null);
    return { error };
  };

  const saveRecipe = async (title, recipeContent, ingredients) => {
    if (!user) {
      setTempRecipe({ title, recipeContent, ingredients });
      throw new Error("Please sign in to save recipes");
    }

    const { data, error } = await supabase
      .from("saved_recipes")
      .insert([
        {
          user_id: user.id,
          title,
          recipe_content: recipeContent,
          ingredients,
        },
      ])
      .select();

    return { data, error };
  };

  const getSavedRecipes = async () => {
    if (!user) return { data: [], error: null };

    const { data, error } = await supabase
      .from("saved_recipes")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    return { data, error };
  };

  const deleteRecipe = async (recipeId) => {
    const { error } = await supabase
      .from("saved_recipes")
      .delete()
      .eq("id", recipeId);

    return { error };
  };

  const saveTempRecipe = async () => {
    if (tempRecipe && user) {
      try {
        await saveRecipe(
          tempRecipe.title,
          tempRecipe.recipeContent,
          tempRecipe.ingredients
        );
        setTempRecipe(null);
        return true;
      } catch (error) {
        console.error("Error saving temp recipe:", error);
        return false;
      }
    }
    return false;
  };

  const clearTempRecipe = () => {
    setTempRecipe(null);
  };

  const value = {
    user,
    loading,
    tempRecipe,
    signUp,
    signIn,
    signOut,
    saveRecipe,
    saveTempRecipe,
    clearTempRecipe,
    getSavedRecipes,
    deleteRecipe,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
