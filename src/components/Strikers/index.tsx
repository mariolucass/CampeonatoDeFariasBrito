export const Strikers = () => {
  const listStrikers = [{ name: "asdasda" }, { name: "asdasda" }];

  const renderStrikers = listStrikers.map((elem) => <li key={elem.name}></li>);

  return <ul>{renderStrikers}</ul>;
};
