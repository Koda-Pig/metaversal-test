"use client";

import Image from "next/image";
import Link from "next/link";
import Card from "@/app/components/Card";

const Post = ({ post, user }) => {
  const { body, tags, reactions, views, userId } = post;
  const { firstName, lastName, username } = user;
  const url = `/profile/${userId}`;

  return (
    <Card>
      <div className="p-4 flex gap-3">
        <Link href={url} className="min-w-[40px]">
          <Image
            src="/images/avatar.png"
            alt="placeholder avatar"
            width={40}
            height={40}
          />
        </Link>
        <div>
          <Link href={url}>
            <h4 className="mb-1 leading-6">
              {firstName} {lastName}
            </h4>
            <p className="text-secondary text-xs mb-1">@{username}</p>
          </Link>

          <p className="mt-4 mb-3 text-secondary">{body}</p>

          <div className="flex gap-3 text-xs">
            {tags?.map((tag, index) => (
              <span key={`${tag}-${index}`} className="text-blue">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 flex gap-6 text-secondary border-t border-content-border">
        <span className="flex gap-1">
          <Image src="/icons/like.svg" alt="like icon" width={16} height={16} />
          {reactions?.likes}
        </span>
        <span className="flex gap-1">
          <Image
            src="/icons/share.svg"
            alt="share icon"
            width={16}
            height={16}
          />
          {reactions?.dislikes}
        </span>
        <span className="flex gap-1">
          <Image
            src="/icons/views.svg"
            alt="views icon"
            width={16}
            height={16}
          />
          {views}
        </span>
      </div>
    </Card>
  );
};

export default Post;
