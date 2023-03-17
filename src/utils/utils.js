const paginate = (followers) => {
  //SETTING UP ITEMS PER PAGE
  const itemPerPage = 9;

  //TOTAL PAGES LENGTH
  const Page = Math.ceil(followers.length / itemPerPage);
  // console.log(Page);

  //NEW ARRAY
  const newFollowers = Array.from({ length: Page }, (_, index) => {
    const start = index * itemPerPage;
    console.log(start);

    return followers.slice(start, start + itemPerPage);
  });
  console.log(newFollowers);
  return newFollowers;
};
export default paginate;
