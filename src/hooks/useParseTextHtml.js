export const useParseTextHtml = () => {
  const parse = (value) => {
    if (value) {
      return value.replace(/\n\r?/g, "<br />")
    }
  }

  return { parse }
}