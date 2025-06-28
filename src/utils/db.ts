import SQLite from 'react-native-sqlite-storage';
import { Article } from '../types/news'; 
SQLite.enablePromise(true);

export const getDBConnection = async () => {
  return await SQLite.openDatabase({ name: 'news.db', location: 'default' });
};

export const createTable = async (db: SQLite.SQLiteDatabase) => {
  const query = `CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    pubDate TEXT,
    image_url TEXT,
    link TEXT
  )`;
  await db.executeSql(query);
};
export const createBookmarkTable = async (db: SQLite.SQLiteDatabase) => {
    const query = `CREATE TABLE IF NOT EXISTS bookmarks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      pubDate TEXT,
      image_url TEXT,
      link TEXT
    )`;
    await db.executeSql(query);
  };
  export const addBookmark = async (db: SQLite.SQLiteDatabase, article: Article) => {
    const query = `INSERT INTO bookmarks (title, pubDate, image_url, link) VALUES (?, ?, ?, ?)`;
    await db.executeSql(query, [
      article.title,
      article.pubDate,
      article.image_url,
      article.link,
    ]);
  };
  
  export const removeBookmark = async (db: SQLite.SQLiteDatabase, link: string) => {
    await db.executeSql('DELETE FROM bookmarks WHERE link = ?', [link]);
  };
  
  export const getBookmarks = async (db: SQLite.SQLiteDatabase): Promise<Article[]> => {
    const [results] = await db.executeSql('SELECT * FROM bookmarks');
    const items: Article[] = [];
  
    for (let i = 0; i < results.rows.length; i++) {
      items.push(results.rows.item(i));
    }
  
    return items;
  };
  
export const saveArticles = async (db: SQLite.SQLiteDatabase, articles: Article[]) => {
  const insertQuery = `INSERT INTO articles (title, pubDate, image_url, link) VALUES (?, ?, ?, ?)`;

  await db.transaction(tx => {
    tx.executeSql('DELETE FROM articles'); // optional: clear previous
    articles.forEach(article => {
      tx.executeSql(insertQuery, [
        article.title,
        article.pubDate,
        article.image_url,
        article.link,
      ]);
    });
  });
};

export const getSavedArticles = async (db: SQLite.SQLiteDatabase): Promise<Article[]> => {
  const [results] = await db.executeSql('SELECT * FROM articles');
  const rows = results.rows;
  const items: Article[] = [];

  for (let i = 0; i < rows.length; i++) {
    items.push(rows.item(i));
  }

  return items;
};
