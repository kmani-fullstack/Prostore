import ToggleMode from "@/components/shared/header/toggle-mode";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ShoppingCart, UserIcon} from "lucide-react";

export default function Menu() {
    return (
        <div className={'flex justify-end gap-3'}>
            <nav className={'hidden md:flex w-full max-w-xs gap-1'}>
                <ToggleMode/>
                <Button asChild variant={'ghost'}>
                    <Link href={'/cart'}>
                        <ShoppingCart/> Cart
                    </Link>
                </Button>
                <Button asChild>
                    <Link href={'/sign-in'}>
                        <UserIcon/> Login
                    </Link>
                </Button>
            </nav>
        </div>
    );
}
