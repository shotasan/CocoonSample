class CreateVariants < ActiveRecord::Migration[5.2]
  def change
    create_table :variants do |t|
      t.belongs_to :product, index: true
      t.string :name
      t.integer :price

      t.timestamps
    end
  end
end
