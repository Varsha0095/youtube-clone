// import Comment from "./Comment";
import CommentsList from "./CommentsList";

const commentData = [
  {
    name: "Varsha",
    text: "This blog has blossomed into a one-stop women’s resource!",
    replies: [
      {
        name: "Varsha",
        text: "This blog has blossomed into a one-stop women’s resource!",
        replies: [],
      },
    ],
  },
  {
    name: "Varsha",
    text: "This blog has blossomed into a one-stop women’s resource!",
    replies: [
      {
        name: "Varsha",
        text: "This blog has blossomed into a one-stop women’s resource!",
        replies: [],
      },
    ],
  },
  {
    name: "Varsha",
    text: "This blog has blossomed into a one-stop women’s resource!",
    replies: [],
  },
  {
    name: "Varsha",
    text: "This blog has blossomed into a one-stop women’s resource!",
    replies: [
      {
        name: "Varsha",
        text: "This blog has blossomed into a one-stop women’s resource!",
        replies: [
          {
            name: "Varsha",
            text: "This blog has blossomed into a one-stop women’s resource!",
            replies: [
              {
                name: "Varsha",
                text: "This blog has blossomed into a one-stop women’s resource!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Varsha",
    text: "This blog has blossomed into a one-stop women’s resource!",
    replies: [
      {
        name: "Varsha",
        text: "This blog has blossomed into a one-stop women’s resource!",
        replies: [],
      },
    ],
  },
  {
    name: "Varsha",
    text: "This blog has blossomed into a one-stop women’s resource!",
    replies: [
      {
        name: "Varsha",
        text: "This blog has blossomed into a one-stop women’s resource!",
        replies: [
          {
            name: "Varsha",
            text: "This blog has blossomed into a one-stop women’s resource!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Varsha",
    text: "This blog has blossomed into a one-stop women’s resource!",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="p-5 m-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      {/* <Comment data={commentData[0]} /> */}
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
