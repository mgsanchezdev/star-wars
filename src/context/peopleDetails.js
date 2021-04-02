import React from 'react';

export const PeopleDetailsContext = React.createContext(null);

export const PeopleDetailsProvider = ({ children }) => {
  const [people, setPeople] = React.useState(null);
  return (
    <PeopleDetailsContext.Provider
      value={{
        people,
        setPeople: (p) => setPeople(p),
      }}
    >
      {children}
    </PeopleDetailsContext.Provider>
  );
};
