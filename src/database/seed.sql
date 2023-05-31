BEGIN;

INSERT INTO users (id, email, password_hash, created_at)
VALUES
      (1, "a@gmail.com", "5f4dcc3b5aa765d61d8327deb882cf99", "2023-01-01 12:00:00"),
      (2, "b@gmail.com", "7c6a180b36896a0a8c02787eeafb0e4c", "2023-01-15 12:00:00"),
      (3, "c@gmail.com", '6dcd4ce23d88e2ee95838f7b014b6284', '2023-02-01 12:00:00')
      ON CONFLICT DO NOTHING;

INSERT INTO SESSIONS sightings (id, user_id, details, image_url, created_at)
VALUES  
      (1, 2, "I saw a goblin in Sainsbury's", "www.imgr.com", "2023-05-01 12:00:00"),
      (2, 3, "I saw ghost and it looked at me", "www.imgr.com", "2023-05-05 12:00:00"),
      (3, 1, "I saw a goblin in Sainsbury's", "www.imgr.com", "2023-05-01 12:00:00"),
      ON CONFLICT DO NOTHING;

COMMIT;