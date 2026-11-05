import {
  BarChart,
  Bar,
  Cell,
  LabelList,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { getReadListFromLocalDB } from "../../utils/localDB";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF0000"];

// Triangle-style bar shape
const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
   Z`;

const TriangleBar = ({ fill, x, y, width, height }) => (
  <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
);

// Colored number above each bar
const renderLabel = ({ x, y, width, value, index }) => (
  <text
    x={x + width / 2}
    y={y - 8}
    textAnchor="middle"
    fill={COLORS[index % COLORS.length]}
    fontSize={12}
    fontWeight={700}
  >
    {value}
  </text>
);

const PagesToRead = () => {
  const readBooks = getReadListFromLocalDB();

  if (readBooks.length === 0) {
    return (
      <div className="container mx-auto my-4">
        <div className="flex min-h-[40vh] items-center justify-center rounded-2xl bg-base-200 p-6 text-center w-[92%] mx-auto">
          <p className="opacity-70 text-2xl">
            No read books yet.
            <br />
            Mark a book as read to see your chart.
          </p>
        </div>
      </div>
    );
  }

  const chartData = readBooks.map((book) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  return (
    <div className="container mx-auto my-8">
      <div className="mx-auto w-[92%] rounded-2xl bg-base-200 p-4 md:p-10">
        <div className="h-105 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 30, right: 20, left: 0, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="4 4" stroke="#d1d5db" />
              <XAxis
                dataKey="name"
                interval={0}
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12, fill: "#6b7280" }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12, fill: "#6b7280" }}
              />
              <Bar dataKey="pages" shape={<TriangleBar />} maxBarSize={100}>
                {chartData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
                <LabelList dataKey="pages" content={renderLabel} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PagesToRead;
