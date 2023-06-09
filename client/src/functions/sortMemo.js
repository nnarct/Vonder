export const sortMemo = (category, transactions) => {
  return Array.from(new Set(transactions[category].map((t) => t.memo)))
    .sort(
      (a, b) =>
        Math.min(
          ...transactions[category]
            .filter((t) => t.memo === a)
            .map((t) => t.createAt)
        ) -
        Math.min(
          ...transactions[category]
            .filter((t) => t.memo === b)
            .map((t) => t.createAt)
        )
    )
    .slice(0, 4)
    .concat("etc.")
    .join(", ");
};
