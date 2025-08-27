import type { ReactNode } from "react";
import { Button } from "../Button";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  submitText: string;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Form = ({
  children,
  submitText,
  isLoading,
  onSubmit,
}: FormProps) => {
  return (
    <form onSubmit={onSubmit}>
      {children}

      <Button type="submit" disabled={isLoading} variant="primary">
        {isLoading ? "Loading..." : submitText}
      </Button>
    </form>
  );
};
