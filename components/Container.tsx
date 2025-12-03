import { cn } from "@/lib/utils";

const Container = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return <div className={cn('w-11/12 m-auto max-w-6xl', className)}>{children}</div>;
}

export default Container
