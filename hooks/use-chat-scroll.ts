import {
  DefaultError,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query'
import { useEffect, useState } from 'react'

type ChatScrollProps = {
  chatRef: React.RefObject<HTMLDivElement>
  bottomRef: React.RefObject<HTMLDivElement>
  shouldLoadMore: boolean
  loadMore: () => Promise<InfiniteQueryObserverResult<unknown, DefaultError>>
  count: number
  pageCount: number
}

export const useChatScroll = ({
  pageCount,
  chatRef,
  bottomRef,
  shouldLoadMore,
  loadMore,
  count,
}: ChatScrollProps) => {
  const [hasInitialized, setHasInitialized] = useState(false)
  const [prevScrollHeight, setPrevScrollHeight] = useState(0)

  useEffect(() => {
    const topDiv = chatRef?.current

    if (topDiv) {
      console.log(topDiv.scrollHeight)
      console.log(prevScrollHeight)
      console.log('I got ' + pageCount)
      topDiv.scrollTop = topDiv.scrollHeight - prevScrollHeight
    }
  }, [pageCount, chatRef, prevScrollHeight])

  useEffect(() => {
    const topDiv = chatRef?.current

    function handleScroll() {
      const scrollTop = topDiv?.scrollTop

      if (topDiv && scrollTop === 0 && shouldLoadMore) {
        setPrevScrollHeight(topDiv.scrollHeight)
        loadMore()
      }
    }

    topDiv?.addEventListener('scroll', handleScroll)

    return () => {
      topDiv?.removeEventListener('scroll', handleScroll)
    }
  }, [shouldLoadMore, loadMore, chatRef, setPrevScrollHeight])

  useEffect(() => {
    const bottomDiv = bottomRef?.current
    const topDiv = chatRef.current
    const shouldAutoScroll = () => {
      if (!hasInitialized && bottomDiv) {
        setHasInitialized(true)
        return true
      }

      if (!topDiv) {
        return false
      }

      const distanceFromBottom =
        topDiv.scrollHeight - topDiv.scrollTop - topDiv.clientHeight
      return distanceFromBottom <= 100
    }

    if (shouldAutoScroll()) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({
          behavior: 'smooth',
        })
      }, 100)
    }
  }, [bottomRef, chatRef, count, hasInitialized])
}
