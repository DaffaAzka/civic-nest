import { useFetcher } from "react-router";
import SelectField from "@/components/custom/select-field";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Province, Regency } from "@/types/map.types";
import type { SelectItem } from "@/types/other.types";

type LoaderData = {
  regencies: Regency[] | null;
  provinces: Province[] | null;
};

export default function ModalCreate({ provinces }: { provinces: Province[] }) {
  const fetcher = useFetcher<LoaderData>();

  const isLoadingRegencies = fetcher.state === "loading";

  const selectedProvinces: SelectItem[] = provinces.map((e) => ({
    id: e.code,
    name: e.name,
  }));

  const selectedRegencies: SelectItem[] =
    fetcher.data?.regencies?.map((e) => ({
      id: e.code,
      name: e.name,
    })) ?? [];

  function handleProvinceChange(provinceCode: string) {
    fetcher.load(`?provinceCode=${provinceCode}`);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create RT</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new RT</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <SelectField
            items={selectedProvinces}
            name="provinces"
            text="Select Provinces"
            onChange={handleProvinceChange}
          />

          <SelectField
            items={selectedRegencies}
            name="regencies"
            text={isLoadingRegencies ? "Loading..." : "Select Regencies"}
            onChange={() => {}}
            isDisabled={isLoadingRegencies || selectedRegencies.length === 0}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
