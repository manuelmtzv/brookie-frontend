export const useParseTextJson = () => {
  const parse = (value) => {
    return value.replace(/\n\r?/g, '\n'); 
  }

  return {
    parse
  }
}