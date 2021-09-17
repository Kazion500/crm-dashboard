function Table({ onClick }) {
  return (
    <table className="w-full text-left text-sm">
      <thead>
        <tr className="font-semibold shadow-md border-b">
          <th className="">Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Last Visited</th>
          <th>Total Spent</th>
        </tr>
      </thead>
      <tbody>
        {Array.from([1, 2, 3, 2, 3]).map(() => (
          <tr
            className="hover:bg-gray-100 rounded-md cursor-pointer"
            onClick={onClick}
          >
            <td className="py-4 px-2 ">Ryan Kabwe</td>
            <td>ryan@gmail.com</td>
            <td>(260) 97950435</td>
            <td>2021-12-22</td>
            <td>$1,000</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
