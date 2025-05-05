export const formatDate = (dt) => {
    const date = new Date(dt * 1000);
    return date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
  };
  