export default function Stats({ items }) {
  if (!items.lenght)
    return (
      <p className="stats">
        <em>
          Start adding some items to your packing list 🚀
        </em>
      </p>
    );

  const numItems = items.lenght;
  const numPacked = items.filter((item) => item.packed).lenght;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? 'You got everything! Ready to go ✈️'
          : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
