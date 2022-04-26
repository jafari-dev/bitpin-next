import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { mockTradesData, transformDigitsToFarsi } from "#/utilities";
import { MarketDetails as IMarketDetails } from "#/types";
import { Line } from "react-chartjs-2";
import { Table } from "react-bootstrap";
import { fetchCharts } from "#/api";
import { memo } from "react";

const MarketDetails: NextPage<{ details: IMarketDetails }> = ({ details }) => {
  return (
    <section className="my-4">
      <div className="mb-4 p-2 bg-white rounded-3">
        <h3 className="mb-3">{details.title}</h3>
        <Line
          data={{
            datasets: [
              {
                label: "Price",
                data: details.chart.data,
                backgroundColor: "#9100ca",
                borderColor: "#2598e4",
                borderWidth: 2,
              },
            ],
            labels: details.chart.labels,
          }}
        />
      </div>
      <div className="overflow-auto bg-white p-2 mt-5 rounded-3">
        <h3 className="mb-3">لیست معاملات قبلی</h3>
        <Table striped bordered hover>
          <thead className="bg-warning">
            <tr>
              <td>تاریخ</td>
              <td>قیمت</td>
              <td>مقدار</td>
              <td>قیمت کل</td>
              <td>نوع</td>
            </tr>
          </thead>
          <tbody>
            {details.trades.map((data) => (
              <tr key={data.id}>
                <td>{transformDigitsToFarsi(data.date)}</td>
                <td>{transformDigitsToFarsi(data.price)}</td>
                <td>{transformDigitsToFarsi(data.amount)}</td>
                <td>{transformDigitsToFarsi(data.totalPrice)}</td>
                <td>{data.type === "buy" ? "خرید" : "فروش"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default memo(MarketDetails);

export const getStaticProps: GetStaticProps = async (context) => {
  const charts = await fetchCharts();
  const marketId = Number(context.params?.marketId);
  const matchedChart = charts.find(({ id }) => id === marketId);
  const tradesData = mockTradesData();

  if (!matchedChart) return { notFound: true };

  const details: IMarketDetails = {
    id: marketId,
    title: matchedChart?.title_fa,
    trades: tradesData,
    chart: {
      labels: matchedChart.chart.map(({ created_at }) => new Date(created_at).toLocaleTimeString()),
      data: matchedChart.chart.map(({ price }) => Number(price)),
    },
  };

  return { props: { details } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const charts = await fetchCharts();
  const paths = charts.map(({ id }) => ({ params: { marketId: String(id) } }));

  return {
    paths,
    fallback: false,
  };
};
