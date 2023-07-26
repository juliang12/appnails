import React, { useCallback, useEffect, useState } from 'react'
import useCalendar from './useCalendar';

const useDataFilter = () => {
    const { eventList } = useCalendar();
    const [search, setSearch] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const filterForTitle = useCallback(() => {
        const filter = eventList.filter((event) =>
          event.title.toLowerCase().includes(search.toLowerCase())
        );
        return filter;
      }, [eventList, search]);

      useEffect(() => {
        if (search === "") {
          filterForTitle();
        }
      }, [search, filterForTitle]);

  return {search, handleChange, filterForTitle}
}

export default useDataFilter