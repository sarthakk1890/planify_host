import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import Logo from "@/public/logo.png";
import Image from "next/image";

import { signIn } from "@/app/lib/auth";
import { GitHubAuthButton, GoogleAuthButton } from "../SubmitButton";

export function AuthModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          Try for Free
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] rounded-2xl bg-white shadow-xl p-6">
        <DialogHeader className="flex flex-row items-center justify-center gap-4 text-center">
          <Image src={Logo} className="size-10" alt="Logo" />
          <h4 className="text-3xl font-semibold">
            Pla<span className="text-primary">nify</span>
          </h4>
        </DialogHeader>
        <div className="flex justify-center w-full mt-2">
          <p className="text-muted-foreground text-sm">
            Your quick and easy meeting scheduler
          </p>
        </div>
        <div className="flex flex-col gap-5 mt-8">
          <form
            className="w-full"
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <GoogleAuthButton />
          </form>

          <form
            className="w-full"
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <GitHubAuthButton />
          </form>
        </div>
        <div className="mt-5 text-center text-sm text-muted-foreground">
          <p>
            By signing in, you agree to our{" "}
            <span className="text-primary cursor-pointer">Terms of Service</span>{" "}
            and{" "}
            <span className="text-primary cursor-pointer">Privacy Policy</span>.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
