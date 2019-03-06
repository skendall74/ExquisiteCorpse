-- Populate Elements
INSERT INTO elements (body, commit, user_id, story_id) values ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac. Semper auctor neque vitae tempus. Risus ultricies tristique nulla aliquet enim tortor at. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Senectus et netus et malesuada fames.', 1, 1, 1);
INSERT INTO elements (body, commit, user_id, story_id) values ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac. Semper auctor neque vitae tempus. Risus ultricies tristique nulla aliquet enim tortor at. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Senectus et netus et malesuada fames.', 1, 1, 1);
INSERT INTO elements (body, commit, user_id, story_id) values ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac. Semper auctor neque vitae tempus. Risus ultricies tristique nulla aliquet enim tortor at. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Senectus et netus et malesuada fames.', 1, 2, 2);
INSERT INTO elements (body, commit, user_id, story_id) values ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac. Semper auctor neque vitae tempus. Risus ultricies tristique nulla aliquet enim tortor at. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Senectus et netus et malesuada fames.', 1, 1, 2);
INSERT INTO elements (body, commit, user_id, story_id) values ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac. Semper auctor neque vitae tempus. Risus ultricies tristique nulla aliquet enim tortor at. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Senectus et netus et malesuada fames.', 1, 2, 2);
INSERT INTO elements (body, commit, user_id, story_id) values ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac. Semper auctor neque vitae tempus. Risus ultricies tristique nulla aliquet enim tortor at. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Senectus et netus et malesuada fames.', 0, 1, 1);
INSERT INTO elements (body, commit, user_id, story_id) values ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac. Semper auctor neque vitae tempus. Risus ultricies tristique nulla aliquet enim tortor at. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Senectus et netus et malesuada fames.', 0, 2, 2);

-- Populate Users
INSERT INTO users (first_name,last_name,email) values('Mat','King','nospam@tenfathomsdeep.com');
INSERT INTO users (first_name,last_name,email) values('John','Public','All@everything.com');

-- Populate perms (Mat = all, John = 2)
INSERT INTO story_perms(story_id, user_id) values(1,1);
INSERT INTO story_perms(story_id, user_id) values(2,1);
INSERT INTO story_perms(story_id, user_id) values(2,2);

-- Populate two stories 
INSERT INTO stories(story_id, story_name) values(1,'Main Story');
INSERT INTO stories(story_id, story_name) values(2,'Story Two');