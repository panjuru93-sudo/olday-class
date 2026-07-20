import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase.js';

/**
 * useHostClasses 훅
 *
 * 호스트가 등록한 클래스 게시물 목록을 Supabase에서 불러옵니다.
 *
 * Example usage:
 * const { hostClasses, loading, refresh } = useHostClasses();
 */
export function useHostClasses() {
  const [hostClasses, setHostClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase
      .from('host_classes')
      .select('*')
      .order('created_at', { ascending: false });
    setHostClasses(data ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { hostClasses, loading, refresh };
}
