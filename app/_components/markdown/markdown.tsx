import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import * as React from "react";

type Props = {
  content: string;
};
export const Markdown = ({ content }: Props) => {
  return (
    <ReactMarkdown
      className="markdown"
      remarkPlugins={[remarkGfm]}
      components={{
        h2({ node, className, children, ...props }) {
          return (
            <>
              <h2>
                <span>{children}</span>
              </h2>
            </>
          );
        },
        p({ node, className, children, ...props }) {
          return (
            <>
                <p className="text-sm sm:text-md md:text-xl">{children}</p>
            </>
          );
        },

      }}
    >
      {content}
    </ReactMarkdown>
  );
};
