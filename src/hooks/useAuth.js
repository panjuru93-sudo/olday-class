import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase.js';

/**
 * useAuth 훅
 *
 * Supabase Auth 세션 상태를 구독하고, 회원가입·로그인·로그아웃 함수를 제공합니다.
 *
 * Example usage:
 * const { user, loading, signUp, signIn, signOut } = useAuth();
 */
export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const signUp = (email, password) => supabase.auth.signUp({ email, password });
  const signIn = (email, password) => supabase.auth.signInWithPassword({ email, password });
  const signOut = () => supabase.auth.signOut();

  return { user, loading, signUp, signIn, signOut };
}
