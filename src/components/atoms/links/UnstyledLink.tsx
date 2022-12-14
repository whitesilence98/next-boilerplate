import Link, {LinkProps} from "next/link";

import clsx from "clsx";

export type UnstyledLinkProps = {
   href: string;
   children: React.ReactNode;
   openNewTab?: boolean;
   className?: string;
   nextLinkProps?: Omit<LinkProps, "href">;
} & React.ComponentPropsWithoutRef<"a">;

export default function UnstyledLink({
   children,
   href,
   openNewTab,
   className,
   nextLinkProps,
   ...rest
}: UnstyledLinkProps) {
   const isNewTab =
      openNewTab !== undefined
         ? openNewTab
         : href && !href.startsWith("/") && !href.startsWith("#");

   if (!isNewTab) {
      return (
         <Link href={href} {...nextLinkProps}>
            <a {...rest} className={className}>
               {children}
            </a>
         </Link>
      );
   }

   return (
      <a
         target="_blank"
         rel="noopener noreferrer"
         href={href}
         {...rest}
         className={clsx(className, "cursor-newtab")}>
         {children}
      </a>
   );
}
