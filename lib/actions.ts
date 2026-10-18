"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createGuestbook } from "@/lib/guestbook"
import { likeProject } from "@/lib/projects"

export async function createGuestbookAction(formData: FormData) {
    const author = String(formData.get("author") ?? "").trim()
    const content = String(formData.get("content") ?? "").trim()

    if (!author || !content) {
        throw new Error("작성자와 내용을 모두 입력해주세요.")
    }

    if (author.length > 20 || content.length > 300) {
        throw new Error("작성자는 20자, 내용은 300자까지 입력할 수 있습니다.")
    }

    await createGuestbook({ author, content })
    revalidatePath("/guestbook")
        revalidatePath("/")
    redirect("/guestbook")
}

export async function likeProjectAction(id: string) {
    return likeProject(id)
}
