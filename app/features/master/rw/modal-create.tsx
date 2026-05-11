import SelectField from "@/components/custom/select-field";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Province } from "@/types/map.types";
import type { SelectItem } from "@/types/other.types";

export default function ModalCreate({ provinces }: { provinces: Province[] }) {
  const selectedProvinces: SelectItem[] = provinces.map((e) => ({
    id: e.code,
    name: e.name,
  }));
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button>Create RT</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a new RT</DialogTitle>
            <DialogDescription>
              <SelectField
                items={selectedProvinces}
                name="provinces"
                text="Select Provinces"
                onChange={() => {}}
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
