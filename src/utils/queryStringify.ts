export type QueryStringifyEntry = Record<string, any>

export function queryStringify(data: QueryStringifyEntry) {
  if (typeof data !== "object") {
    return
  }

  const newData = Object.entries(data)?.reduce((acc: string[], [key, value]) => {
    acc.push(`${key}=${value}`)
    return acc
  }, []);

  return '?' + newData.join('&')
}
