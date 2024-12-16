"use client"
export default function imgLoader({ src, width, quality }: ({src: string, width: number, quality: number})): string {
    return `${src}?w=${width}&q=${quality || 75}`;
}