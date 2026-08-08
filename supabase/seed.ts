import { products } from '../src/data';
import { createClient } from '@supabase/supabase-js';

// To be run with ts-node or tsx.
const supabaseUrl = process.env.SUPABASE_URL || 'https://your-project-url.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'your-anon-key';

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
  console.log('Starting seed...');
  for (const product of products) {
    const { error } = await supabase
      .from('products')
      .upsert({
        slug: product.slug,
        name: product.name,
        description: product.description,
        price: product.price,
        compare_at_price: product.originalPrice || null,
        image: product.image,
        category: product.category[0] || '',
        gender: product.gender,
        is_new: product.badge === 'New',
        is_bestseller: product.badge === 'Bestseller'
      }, { onConflict: 'slug' });

    if (error) {
      console.error(`Error inserting ${product.name}:`, error);
    } else {
      console.log(`Inserted ${product.name}`);
    }
  }
  console.log('Seed complete!');
}

seed();
