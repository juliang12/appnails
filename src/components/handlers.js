export const totals = (selected, totales, setTotales) => {
    if (selected?.manicure !== "mel") {
      const emp = totales?.map((em) =>
        em.manicure === selected.manicure
          ? { ...em, income: em.income + selected?.income / 2 }
          : em
      );
      setTotales(emp);
    }
  };


  