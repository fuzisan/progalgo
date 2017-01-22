class CreateReadings < ActiveRecord::Migration[5.0]
  def change
    create_table :readings do |t|
      t.string :title
      t.text :code
      t.text :animation
      t.text :question

      t.timestamps
    end
  end
end
