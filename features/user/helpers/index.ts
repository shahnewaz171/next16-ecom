type OrderStatusVariant = 'success' | 'info' | 'warning' | 'destructive' | 'secondary';

export const orderStatusVariant = (status: string): OrderStatusVariant => {
  const formattedStatus = status.toLowerCase().replace(' ', '_');

  const statusMap: Record<string, OrderStatusVariant> = {
    delivered: 'success',
    in_transit: 'info',
    processing: 'warning',
    cancelled: 'destructive'
  };

  return statusMap[formattedStatus] || 'secondary';
};
