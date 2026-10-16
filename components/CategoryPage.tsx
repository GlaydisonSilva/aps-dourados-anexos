import { categories, type Category } from '../lib/documents';
import LiveDocuments from './LiveDocuments';
export default function CategoryPage({slug}:{slug:Category}) { const category=categories.find(c=>c.slug===slug)!;return <main className="container content"><div className="page-heading"><h1>{category.label}</h1><p>{category.description}</p></div><LiveDocuments category={slug}/></main> }
