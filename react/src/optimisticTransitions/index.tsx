import { startTransition, useOptimistic, useState } from "react";

const updateRequest = (inputValue: any) => {
  return inputValue;
};

const SearchForm = ({ age, name, action }: { age: number; name: string; action: any }) => {
  const [optimisticAge, setOptimisticAge] = useOptimistic(age);
  const [optimisticSearch, setOptimisticSearch] = useOptimistic(name);
  const [inPending, setIsPending] = useOptimistic(false);
  const [definedAge, setAge] = useState<number>();

  // statTransition / use Optimistic

  const onAgeChange = (e: any) => {
    // set First the optimistic age then once post request has been completed
    // set the age. transition is completed when (optimisticAge definedAge) and newAge are equal
    startTransition(async () => {
      setOptimisticAge(e.target.values);
      const newAge = (await postMessage(e.target.values)) as unknown as number;
      setAge(newAge);
    });
  };

  const searchAction = async (formData: FormData) => {
    const inputValue = formData.get("name");
    if (inputValue) {
      setOptimisticSearch(inputValue.toString());
    }

    const update = await updateRequest(inputValue);
    startTransition(() => {
      setIsPending(true);
      action(update);
    });
  };

  return (
    <>
      <input onChange={onAgeChange} type="number" />
      {definedAge}
      {optimisticAge}

      <form action={searchAction}>
        {optimisticSearch}
        <label>Search</label>
        <input type="text" name="name" disabled={name !== optimisticSearch} />
        {inPending ? "loading..." : ""}
      </form>
    </>
  );
};

export const searchPlaceholder = () => {
  const [name, setName] = useState("edouard");
  return <SearchForm age={42} action={setName} name={name} />;
};

const node = document.getElementById("contentId");
if (window.getSelection) {
  const selection = window.getSelection();
  const range = document.createRange();
  node && range.selectNodeContents(node);
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
  }
}
