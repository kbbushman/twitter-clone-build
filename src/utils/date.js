import formatDistanceToNow from "date-fns/formatDistanceToNow";

// https://date-fns.org/v2.17.0/docs/formatDistanceToNow
export function formatCreatedAt(timeStamp) {
  return formatDistanceToNow(new Date(timeStamp), {
    addSuffix: true,
  });
}

// https://date-fns.org/v2.17.0/docs/format
export function formatDate() {}

export function formatTime() {}
