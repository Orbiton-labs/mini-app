import { IconClose } from "@/icons/fixed/close";
import { FC } from "react";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export interface MemoDialogProps {
  trigger: React.ReactNode;
  setMemo: (memo: string) => void;
  onSubmit: () => Promise<void>;
}

export const MemoDialog: FC<MemoDialogProps> = ({ trigger, setMemo, onSubmit }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent aria-describedby={undefined} className="sm:max-w-[425px] bg-grey3 border border-grey7">
        <DialogHeader className="border-b border-grey7 pb-5">
          <DialogTitle className="text-white2 text-2xl">Special Event Code</DialogTitle>
          <DialogClose>
            <IconClose className="absolute right-6 top-6" />
          </DialogClose>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <Label htmlFor="name" className="text-white2 text-sm">
            Special Event Code (Optional):
          </Label>
          <Input className="bg-purple2 border-none focus:ring-transparent" id="name" placeholder="Enter your memo" onChange={(e) => setMemo(e.target.value)} />
        </div>
        <DialogClose>
          <SubmitButton onClick={onSubmit} content="Confirm Swap" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
