import { Divider, Flex, Tag, Typography } from "antd";
import CoinInfo from "./CoinInfo";

export default function CoinInfoModal({ coin }) {
  return (
    <>
      <CoinInfo coin={coin} withSymbol />
      <Divider />
      <Typography.Paragraph>
        <Typography.Text strong>1 hour:</Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? "green" : "red"}>
          {coin.priceChange1h}%
        </Tag>
        <Typography.Text strong>1 day:</Typography.Text>
        <Tag color={coin.priceChange1d > 0 ? "green" : "red"}>
          {coin.priceChange1d}%
        </Tag>
        <Typography.Text strong>1 week:</Typography.Text>
        <Tag color={coin.priceChange1w > 0 ? "green" : "red"}>
          {coin.priceChange1w}%
        </Tag>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Price:</Typography.Text>
        <Tag>{coin.price.toFixed(2)}$</Tag>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>BTC Price:</Typography.Text>
        <Tag>{coin.priceBtc}</Tag>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Market Cap:</Typography.Text>
        <Tag>{coin.marketCap}</Tag>
      </Typography.Paragraph>
      {coin.contractAddress && (
        <Typography.Paragraph>
          <Typography.Text strong>Contract Address:</Typography.Text>
          <Tag>{coin.contractAddress}</Tag>
        </Typography.Paragraph>
      )}
    </>
  );
}
