"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"
import { Check } from "lucide-react"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="flex w-full justify-between items-center">
              <div className="flex flex-col gap-2 justify-between items-start max-w-[70%]">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
              <div className="flex items-center">
                {action}

                <defs>
                  <linearGradient
                    id="paint0_linear_521_2333"
                    x1="32.7002"
                    y1="2"
                    x2="32.7002"
                    y2="22"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#836CDE" />
                    <stop offset="1" stopColor="#B866D2" />
                  </linearGradient>
                </defs>
                <Check stroke="url(#paint0_linear_521_2333)" className="w-10 h-10" />
              </div>
            </div>
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
