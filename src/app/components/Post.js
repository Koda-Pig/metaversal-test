"use client";
import Image from "next/image";
import Link from "next/link";

const Post = (post) => {
  console.log(post);
  const { id, title, body, tags, reactions, views, userId } = post;

  // these links need to go to the user profile page

  return (
    <div data-wrapper className="border border-content-border rounded-2xl">
      <div data-body className="p-4 flex gap-3">
        <Link href="/" className="min-w-[40px]">
          <Image
            src="/images/avatar.png"
            alt="placeholder avatar"
            width={40}
            height={40}
          />
        </Link>
        <div data-content>
          <Link href="/" className="mb-1">
            <h4>USER FIRST AND LAST NAME GOES HERE</h4>
          </Link>
          <p className="text-secondary text-xs mb-1">@USER TAG GOES HERE</p>
          <p className="mt-4 mb-3 text-secondary">{body}</p>
          {tags?.length > 0 && (
            <div className="flex gap-3 text-xs">
              {tags.map((tag, index) => (
                <span key={`${tag}-${index}`} className="text-link">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="p-4 flex gap-6 text-secondary">
        <span>LIKEICON - {reactions?.likes}</span>
        <span>SHAREICON - {reactions?.dislikes}</span>
        <span>VIEWSICON - {views}</span>
      </div>
    </div>
  );
};

export default Post;
