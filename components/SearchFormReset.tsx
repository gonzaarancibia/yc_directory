"use client"
import { X } from 'lucide-react'
import { NextPage } from 'next'
import Link from 'next/link'

interface Props {}

const SearchFormReset: NextPage<Props> = ({}) => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement
        if (form) {
            form.reset();
        }

        if (form) form.reset();
    }
  return <button type='reset' onClick={reset}>
            <Link href="/" className="search-btn text-white">
                <X className="size-5"/>
            </Link>
        </button>
  
}

export default SearchFormReset