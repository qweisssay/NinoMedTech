export function removeNullUndefinedFields(obj: Record<string, any>): Record<string, any> | null {
    Object.keys(obj).forEach((key) => {
      if (obj[key] === null || obj[key] === undefined || obj[key] === 0 ) {
        delete obj[key];
      }
    });
    if (Object.keys(obj).length === 0) {
      return null;
    }
    return obj;
  }