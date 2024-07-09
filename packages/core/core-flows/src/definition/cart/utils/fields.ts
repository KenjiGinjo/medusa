export const cartFieldsForRefreshSteps = [
  "subtotal",
  "item_subtotal",
  "shipping_subtotal",
  "region_id",
  "currency_code",
  "region.*",
  "items.*",
  "items.product.id",
  "items.product.collection_id",
  "items.product.categories.id",
  "items.product.tags.id",
  "items.adjustments.*",
  "items.tax_lines.*",
  "shipping_address.*",
  "shipping_methods.*",
  "shipping_methods.adjustments.*",
  "shipping_methods.tax_lines.*",
  "customer.*",
  "customer.groups.*",
]

export const completeCartFields = [
  "id",
  "currency_code",
  "email",
  "created_at",
  "updated_at",
  "total",
  "subtotal",
  "tax_total",
  "discount_total",
  "discount_tax_total",
  "original_total",
  "original_tax_total",
  "item_total",
  "item_subtotal",
  "item_tax_total",
  "sales_channel_id",
  "original_item_total",
  "original_item_subtotal",
  "original_item_tax_total",
  "shipping_total",
  "shipping_subtotal",
  "shipping_tax_total",
  "original_shipping_tax_total",
  "original_shipping_tax_subtotal",
  "original_shipping_total",
  "raw_total",
  "raw_subtotal",
  "raw_tax_total",
  "raw_discount_total",
  "raw_discount_tax_total",
  "raw_original_total",
  "raw_original_tax_total",
  "raw_item_total",
  "raw_item_subtotal",
  "raw_item_tax_total",
  "raw_sales_channel_id",
  "raw_original_item_total",
  "raw_original_item_subtotal",
  "raw_original_item_tax_total",
  "raw_shipping_total",
  "raw_shipping_subtotal",
  "raw_shipping_tax_total",
  "raw_original_shipping_tax_total",
  "raw_original_shipping_tax_subtotal",
  "raw_original_shipping_total",
  "items.*",
  "items.tax_lines.*",
  "items.adjustments.*",
  "customer.*",
  "shipping_methods.*",
  "shipping_methods.tax_lines.*",
  "shipping_methods.adjustments.*",
  "shipping_address.*",
  "billing_address.*",
  "region.*",
  "payment_collection.*",
  "payment_collection.payment_sessions.*",
  "items.variant.id",
  "items.variant.manage_inventory",
  "items.variant.allow_backorder",
  "items.variant.inventory_items.inventory_item_id",
  "items.variant.inventory_items.required_quantity",
  "items.variant.inventory_items.inventory.location_levels.stock_locations.id",
  "items.variant.inventory_items.inventory.location_levels.stock_locations.name",
  "items.variant.inventory_items.inventory.location_levels.stock_locations.sales_channels.id",
  "items.variant.inventory_items.inventory.location_levels.stock_locations.sales_channels.name",
]

export const productVariantsFields = [
  "id",
  "title",
  "sku",
  "manage_inventory",
  "allow_backorder",
  "barcode",
  "product.id",
  "product.title",
  "product.description",
  "product.subtitle",
  "product.thumbnail",
  "product.type",
  "product.collection",
  "product.handle",
  "calculated_price.calculated_amount",
  "calculated_price.is_calculated_price_tax_inclusive",
  "inventory_items.inventory_item_id",
  "inventory_items.required_quantity",
  "inventory_items.inventory.location_levels.stock_locations.id",
  "inventory_items.inventory.location_levels.stock_locations.name",
  "inventory_items.inventory.location_levels.stock_locations.sales_channels.id",
  "inventory_items.inventory.location_levels.stock_locations.sales_channels.name",
]