import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

export default function LoadingButton({
  text,
  loading = false,
}: {
  text: string;
  loading?: boolean;
}) {
  return (
    <Button disabled={loading} className="w-full flex gap-2">
      {loading ?
        <Spinner />
      : <></>}
      {text}
    </Button>
  );
}
