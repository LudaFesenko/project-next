// export const getCountById = <
//   TKey extends string,
//   TItem extends Record<TKey, string>
// >(
//   items: TItem[],
//   idKey: TKey
// ) => {
//   // console.log({ [idKey]: id });
//   // return items.reduce((counts, { [idKey]: id }) => {
//   return items.reduce((counts, { [idKey]: id }) => {
//     // console.log(item[idKey]);
//     // const id = item[idKey];
//     // const { [idKey]: id } = item;

//     if (!counts[id]) counts[id] = 0;

//     counts[id] += 1;

//     return counts;
//   }, {} as Record<string, number>);
// };
export const getCountById = <
  Tkey extends string,
  Item extends Record<Tkey, string>
>(
  items: Item[],
  idKey: Tkey
) => {
  return items.reduce((counts, { [idKey]: id }) => {
    if (!counts[id]) counts[id] = 0;
    counts[id] += 1;
    return counts;
  }, {} as Record<string, number>);
};
