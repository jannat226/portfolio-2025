"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="flex space-x-2">
      <Button variant="outline" size="icon" onClick={() => setTheme("light")}>
        <Sun className="w-2 h-2" />
        <span className="sr-only">Light mode</span>
      </Button>
      <Button variant="outline" size="icon" onClick={() => setTheme("dark")}>
        <Moon className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Dark mode</span>
      </Button>
      <Button variant="outline" size="icon" onClick={() => setTheme("system")}>
        <Monitor className="h-1 w-1" />
        <span className="sr-only">System mode</span>
      </Button>
    </div>
  );
}
