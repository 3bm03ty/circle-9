import type { CommentI } from "../interfaces/commentI";

export default function Comment({ comment }: { comment: CommentI }) {
  return (
    <div className="flex justify-around w-full px-5 my-3 border-t pt-4 border-divider ">
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className="w-full h-16 flex items-center justify-between ">
            <div className="flex">
              <img
                className=" rounded-full w-10 h-10 mr-3"
                src={comment.commentCreator.photo}
              />
              <div>
                <h3 className="text-md font-semibold ">
                  {comment.commentCreator.name}
                </h3>
                <p className="text-xs text-gray-500">{comment.createdAt}</p>
              </div>
            </div>
          </div>
          <svg
            className="w-16"
            xmlns="http://www.w3.org/2000/svg"
            width={27}
            height={27}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#b0b0b0"
            strokeWidth={2}
            strokeLinecap="square"
            strokeLinejoin="round"
          >
            <circle cx={12} cy={12} r={1} />
            <circle cx={19} cy={12} r={1} />
            <circle cx={5} cy={12} r={1} />
          </svg>
        </div>
        <div className="ps-12 pt-4">
          <p>{comment.content}</p>
        </div>
      </div>
    </div>
  );
}
