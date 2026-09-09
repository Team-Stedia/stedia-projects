import { FacebookIcon } from "@/components/icons"
import { FACEBOOK_URL } from "@/lib/social"

export function FloatingFacebook() {
  return (
    <a
      href={FACEBOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Stedia on Facebook"
      className="fixed right-5 bottom-5 z-50 flex size-12 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg shadow-blue-600/30 transition-transform duration-200 ease-out hover:scale-110 active:scale-95"
    >
      <FacebookIcon className="size-6" />
    </a>
  )
}